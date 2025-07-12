# 📄 QR Code PDF Manager (Django + DRF)

This project is a full-stack Django web application where users can upload PDF files, and instantly generate QR codes for each upload. Each QR code links to the file's URL, which can be scanned to view or download the PDF.

📅 Built using:

- Django
- Django REST Framework
- HTML/CSS/JS (Vanilla)
- QRCode / Pillow
- ZIP download for multiple PDFs

---

## 🌟 Features

- 📄 Upload PDF files
- ⚡ Auto-generate QR code for each file
- 👁 View QR code and preview PDF
- 📅 Download individual QR codes
- ✅ Select multiple files to download as ZIP
- 🔁 Mobile-compatible QR scanning (dynamic IP support)

---

## 📸 Screenshots

> *Add your screenshots in the **`/screenshots`** folder and update paths here.*

| Upload & Generate | View QR & Download | Select for ZIP |
| ----------------- | ------------------ | -------------- |
|                   |                    |                |

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/qr-pdf-manager.git
cd qr-pdf-manager
```

### 2. Create virtual environment & install requirements

```bash
python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows
pip install -r requirements.txt
```

### 3. Configure Django

```bash
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Access the app at `http://<your-ip>:8000/`

---

## 📁 Folder Structure

```
qr_proj/
├── qr_app/             # Django app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── templates/
│   ├── static/
│   └── urls.py
├── media/              # Uploaded PDFs & QR codes
├── static/             # JS, CSS
├── templates/          # HTML files
├── db.sqlite3
├── manage.py
└── README.md
```

---

## 🚀 Demo Features

| Feature              | Description                             |
| -------------------- | --------------------------------------- |
| 📄 Upload PDF        | Select and upload files                 |
| 🔲 Generate QR       | QR generated with dynamic URL           |
| ✅ Checkboxes         | Select multiple rows                    |
| 📂 Download ZIP      | Download all selected PDFs in one click |
| 📱 Mobile Compatible | Scan QR and access PDF on any device    |

---

## 🔐 Security & Notes

- Files are uploaded to `/media/`
- QR codes are auto-generated with public URLs
- Works on any device within local network (or via ngrok for external)

---

## 🙌 Credits

Built with 💙 using Django, Django REST Framework, and QRCode module.\
Made by [Shreshtha Srivastava](https://github.com/Shreshtha03)


