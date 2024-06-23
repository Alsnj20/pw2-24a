from django.http import HttpResponse
from django.views.generic import View
from django.template.loader import get_template
from ..project.renderers import render_to_pdf
# Create your views here.



def GeneratePDF(View):
  def get(self, request, *args, **kwargs):
    template = get_template('invoice.html')
    context = {
        'invoice_id': 123,
        'customer_name': 'John Cooper',
        'amount': 1399.99,
        'today': 'Today',
    }
    html = template.render(context)
    return HttpResponse(html)