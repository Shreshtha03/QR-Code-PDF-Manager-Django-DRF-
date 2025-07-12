from rest_framework import serializers
from .models import PDFDocument

class PDFDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDFDocument
        fields = ['id', 'pdf_file', 'uploaded_at', 'qr_code_image']

    def get_pdf_file(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.pdf_file.url)

    def get_qr_code_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.qr_code_image.url)

