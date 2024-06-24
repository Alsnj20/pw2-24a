from django.http import HttpResponse
from django.views.generic import View
from django.template.loader import get_template
from .renderers import render_to_pdf

class GeneratePDF(View):
  def get(self, request, *args, **kwargs):
    template = get_template('pdf/invoice.html')
    context = {
        'invoice_number': 123,
        'customer_name': 'John Cooper',
        'amount': 1399.99,
        'date': 'Today',
    }
    html = template.render(context)
    pdf = render_to_pdf('pdf/invoice.html', context)
    return HttpResponse(pdf, content_type='application/pdf')