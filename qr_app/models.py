from django.db import models

class PDFDocument(models.Model):
    pdf_file = models.FileField(upload_to='pdfs/')
    qr_code_image = models.ImageField(upload_to='qr_codes/', blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.pdf_file.name