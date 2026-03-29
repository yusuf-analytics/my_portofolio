export const projectsData = [
  {
    slug: "bank-telemarketing-success-prediction",
    title: "Predictive Modeling for Bank Telemarketing Success",
    categories: ["data-analyst", "data-science", "machine-learning"],
    badge: "Machine Learning / Data Science",
    shortDescription: "Membangun model klasifikasi Machine Learning untuk memprediksi nasabah yang berpotensi subscribe deposito berjangka, mengubah strategi mass marketing menjadi precision targeting yang meningkatkan net profit 48%.",
    techStack: ["Python", "Scikit-learn", "Random Forest", "Decision Tree", "SMOTE", "GridSearchCV", "Pandas", "Streamlit", "CRISP-DM"],
    overview: "Bank menggunakan tim telemarketing untuk menawarkan produk deposito berjangka via telepon. Masalahnya, strategi yang digunakan masih bersifat massal, semua nasabah dihubungi tanpa filter, sehingga conversion rate sangat rendah dan biaya operasional membengkak. Project ini membangun model supervised learning classification menggunakan metodologi CRISP-DM untuk mengklasifikasikan nasabah ke dalam dua kelas: berpotensi subscribe (Yes) atau tidak (No).",
    datasetFeatures: [
      "Dataset terdiri dari 45.211 data nasabah dengan 4 kelompok fitur:",
      "<strong>Customer Demographic:</strong> age, job, marital, education, balance, housing, loan",
      "<strong>Current Campaign Contact:</strong> contact, day, month, duration, campaign",
      "<strong>Previous Campaign History:</strong> pdays, previous, poutcome",
      "<strong>Target Variable:</strong> y (yes/no)"
    ],
    edaFindings: [
      "Variabel <strong>duration</strong> dihapus karena menyebabkan data leakage (hanya diketahui setelah panggilan selesai)",
      "Variabel <strong>default</strong> dihapus karena 98.2% bernilai \"no\", sehingga variance terlalu rendah",
      "Variabel <strong>pdays</strong> dihapus karena redundant dengan fitur previous",
      "<strong>Job type</strong> terbukti signifikan mempengaruhi keputusan nasabah (p-value = 3.3e-172)",
      "Data imbalance terdeteksi: 88.3% No vs 11.7% Yes, diatasi dengan SMOTE oversampling"
    ],
    modeling: {
      description: "Dua model dibandingkan menggunakan GridSearchCV + Cross Validation. <strong>Random Forest</strong> dipilih karena lebih seimbang antara precision dan recall, menghasilkan keputusan bisnis yang lebih realistis.",
      modelComparison: [
        { name: "Random Forest (Terpilih)", params: "max_depth=4, n_estimators=20", recall: "0.60", metric: "F1-Score: 0.27", cvScore: "0.624" },
        { name: "Decision Tree", params: "max_depth=2", recall: "0.91", metric: "Accuracy: 0.25", cvScore: "0.920 (akurasi sangat rendah, tidak dipilih)" }
      ],
      confusionMatrixTable: [
        { type: "True Positive", count: "670", desc: "Nasabah potensial teridentifikasi" },
        { type: "False Positive", count: "3.200", desc: "Dihubungi tapi tidak subscribe" },
        { type: "False Negative", count: "420", desc: "Nasabah potensial yang terlewat" },
        { type: "True Negative", count: "4.700", desc: "Berhasil difilter, sumber penghematan terbesar" }
      ],
      classificationReportTable: [
        { class: "0 (Negative)", precision: "0.93", recall: "0.16", f1Score: "0.28", support: "7952" },
        { class: "1 (Positive)", precision: "0.13", recall: "0.91", f1Score: "0.23", support: "1091" },
        { class: "accuracy", precision: "-", recall: "-", f1Score: "0.25", support: "9043" },
        { class: "macro avg", precision: "0.53", recall: "0.54", f1Score: "0.25", support: "9043" },
        { class: "weighted avg", precision: "0.83", recall: "0.25", f1Score: "0.27", support: "9043" }
      ]
    },
    businessImpact: [
      { metric: "Total Calls", mass: "8.990", rf: "3.870", impact: "Workload -57%" },
      { metric: "OPEX", mass: "Rp 449.500.000", rf: "Rp 193.500.000", impact: "Hemat Rp 256 jt" },
      { metric: "Net Income", mass: "Rp 95.500.000", rf: "Rp 141.500.000", impact: "Profit +48%" },
      { metric: "ROI", mass: "21%", rf: "73%", impact: "+3x lipat" },
      { metric: "CPA", mass: "Rp 412.385", rf: "Rp 288.805", impact: "-30%" }
    ],
    roadmap: [
      "<strong>Month 1 (Target Optimization & Database Cleanup):</strong> Segmentasi \"Golden Age\", balance thresholding, update database kontak",
      "<strong>Month 2 (ML Model Implementation):</strong> Deploy ke CRM, aturan \"Max 3 Calls\", A/B Testing campaign",
      "<strong>Month 3 (Impact & Scalability Evaluation):</strong> Opportunity cost analysis, cost efficiency analysis, model refinement"
    ],
    visuals: ["/download.png", "/download-1.png", "/download-2.png"],
    image: "/bank-telemarketing.jpeg",
    link: "https://final-project-ds-yusuf.streamlit.app"
  }
];
