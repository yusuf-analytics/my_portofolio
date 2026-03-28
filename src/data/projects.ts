export const projectsData = [
  {
    slug: "bank-telemarketing-success-prediction",
    title: "Bank Telemarketing Success Prediction",
    categories: ["data-analyst", "data-science", "machine-learning"],
    badge: "Data Science / ML",
    shortDescription: "Predictive model built with Random Forest and SMOTE to optimize bank telemarketing strategies, reducing workload by 57%.",
    context: "In the highly competitive banking sector, selling long-term deposits via direct marketing is essential. However, calling customers indiscriminately is deeply inefficient and degrades the overall customer experience.",
    problem: "Prior to this solution, the bank relied on mass telemarketing, facing extremely high operational costs and alarmingly low campaign efficiency. They were missing crucial opportunities with high-propensity customers because agents were too busy calling unlikely prospects.",
    methodology: "Utilized the <strong>CRISP-DM</strong> methodology. Implemented EDA, data preprocessing, and handled imbalanced data using SMOTE. Built predictive models using Decision Tree and Random Forest with GridSearchCV hyperparameter tuning.",
    solution: "Developed an interactive machine learning application deployed via Streamlit. The application allows marketing managers to input a batch of customer data and instantly receive a propensity-to-buy score. This empowers telemarketing agents to precisely target only the top 20% of high-value prospects.",
    visuals: ["/dashboard_visual_1.png"],
    impact: [
      "📉 Telemarketing workload reduced by <strong>57%</strong>",
      "💰 Operational cost savings of approx. <strong>Rp256 million</strong>",
      "📊 Cost per Acquisition decreased by <strong>30%</strong>",
      "🚀 Marketing ROI increased from <strong>21%</strong> to <strong>73%</strong>",
      "📈 Net profit increased by around <strong>48%</strong>"
    ],
    image: "/bank-telemarketing.jpeg",
    link: "https://lnkd.in/gEHJjrXk"
  }
];
