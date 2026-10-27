from pathlib import Path
from html.parser import HTMLParser
import json, collections
O=Path('outputs')
class Audit(HTMLParser):
 def __init__(self): super().__init__(); self.refs=[]; self.ids=[]; self.images=[]; self.text=[]
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.append(d['id'])
  if tag=='a':self.refs.append(d.get('href',''))
  if tag=='img':self.images.append(d)
 def handle_data(self,s):self.text.append(s)
p=Audit();p.feed((O/'FreightClaimKit-Architecture-and-Visual-Direction.html').read_text())
errors=[]
for ref in p.refs:
 if ref.startswith('#') and ref[1:] not in p.ids: errors.append('missing anchor '+ref)
 elif not ref.startswith(('http','#')) and not (O/ref).is_file():errors.append('missing file '+ref)
for x in p.images:
 if not (O/x['src']).is_file(): errors.append('missing image '+x['src'])
 if not x.get('alt'):errors.append('missing alt '+x['src'])
f=json.loads((O/'data/synthetic-dossier-fixtures.json').read_text()); cs=f['cases']; fc=next(x for x in cs if x['id']=='FC-208'); amounts=fc['financial_reconciliation']
assert len(cs)==10 and len({x['id'] for x in cs})==10
assert dict(collections.Counter(x['audit_status'] for x in cs))==f['counts']
assert amounts['draft_damaged_cartons']*amounts['draft_unit_value']==amounts['draft_damage_amount']==2880
assert amounts['draft_damaged_cartons']*amounts['invoice_unit_value']==amounts['source_based_comparison']==2640
assert amounts['draft_damage_amount']-amounts['source_based_comparison']==amounts['difference']==240
assert amounts['shipment_cartons']*amounts['invoice_unit_value']==amounts['shipment_invoice_value']==22000
assert all(x['filing_deadline'] is None for x in cs)
assert fc['submitted_amount'] is None and fc['recovered_amount'] is None
assert sum(x['submitted_amount'] or 0 for x in cs)==f['report']['submitted_total_known_cohort']==3950
assert sum(x['recovered_amount'] or 0 for x in cs)==f['report']['recovered_total_known_cohort']==2100
assert sum(x['recovered_amount'] is not None for x in cs)==3
assert len(json.loads((O/'data/pilot-comparison-worksheet.json').read_text())['cases'])==20
assert len(p.ids)==len(set(p.ids))
text=' '.join(p.text)
assert 'Identify the movement' in text and 'BOL / master BOL' in text
for name in ['Freight Desk','Freight Review','Freight Proof','Freight Signal','Freight Report']:assert name in text
report={'scope':'Planning document and data checks only; not website/product QA','date':'2026-10-27','local_references':'passed' if not errors else errors,'images_with_alt':len(p.images),'section_anchors':len(p.ids),'fixture_arithmetic':'passed','queue_counts':'passed','unknown_deadline_and_outcome_states':'passed','blank_pilot_case_slots':20,'desktop_document_render':'visually checked at browser default 1280×720','mobile_product_screenshots':'not produced; implementation is future work','generated_art_data_accuracy':'Known discrepancies documented; art is not data authority','approx_document_words':len(text.split())}
(O/'document-qa/verification.json').write_text(json.dumps(report,indent=2)); print(json.dumps(report,indent=2))
assert not errors
