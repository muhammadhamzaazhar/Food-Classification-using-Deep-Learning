# 🍕🥗 Food Classification using Deep Learning  

![image](https://github.com/user-attachments/assets/1f9929cb-cdc7-4eea-8c4e-46598b236b6b)

This repository contains **deep learning models** for **food classification**, covering **binary, 10-class, and 101-class classification tasks**. The models are trained using **custom CNN architectures** and **transfer learning** with **EfficientNet** and **ResNet**.  

🔗 **Dataset:** [FoodVision Dataset Link](https://huggingface.co/datasets/mhamza-007/multi-class-food-dataset/tree/main)

🔗 **Live Training Logs & Results:** Tracked with [Weights & Biases (WandB)](https://api.wandb.ai/links/mhamza007/wkaqlxoy)  

---

## **📌 Project Overview**  

The goal of this project is to develop an **efficient food classification system** capable of distinguishing between different food categories. The following tasks were performed:  

✅ **Binary Classification:** Pizza 🍕 vs. Steak 🥩  
✅ **10-Class Classification:** Classifying images into 10 different food categories  
✅ **101-Class Classification:** Classifying images from the full **Food101 dataset**  
✅ **Transfer Learning:** Using **EfficientNet & ResNet** with **Feature Extraction & Fine-Tuning**  
✅ **Training on 10% vs. 100% of Data:** Evaluating model performance on limited vs. full dataset  
✅ **Data Augmentation:** Improving generalization using transformations like flipping, rotation, and zoom  

---

## **📊 Results & Insights**
- EfficientNetB4 (Fine-Tuned) performed best for 101-class classification on 100% of the data.
- Feature extraction works well on small datasets, but fine-tuning improves performance on large datasets.
- Data augmentation helped improve model generalization, reducing overfitting.

## **📌 Future Improvements**
🔹 Experiment with Swin Transformers for food classification.

🔹 Optimize training using learning rate schedules.

🔹 Deploy model as a web application for real-time classification.

## **📝 Author**
👤 Muhammad Hamza Azhar

## **⭐ Acknowledgments**
If you found this project useful, please consider starring 🌟 the repository and sharing it!

Happy Coding! 🚀




