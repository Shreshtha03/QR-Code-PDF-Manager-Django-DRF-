
from django.contrib import admin
from .models import PDFDocument

@admin.register(PDFDocument)
class PDFDocumentAdmin(admin.ModelAdmin):
    list_display = ('id', 'pdf_file', 'uploaded_at', 'qr_code_image')
    list_filter = ('uploaded_at',)