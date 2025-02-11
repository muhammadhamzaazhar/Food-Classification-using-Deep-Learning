# Fine-Tuned EfficientNetB4 for Food Classification 🍕🥗
The model has been trained using the Food101 dataset and supports classification across 101 food categories.

🔗 Model Link: https://drive.google.com/drive/folders/1G0RBnPCBId7fmAv6YOmkShiKetAG5p2h

## 📌 Model Details
- **Base Model:** EfficientNetB4 (pretrained on ImageNet)
- **Training Strategy:** Transfer Learning + Fine-Tuning
- **Dataset:** Food101 (10% and 100% variants used)
- **Layers Unfrozen for Fine-Tuning:** Last 5 or 10 layers (depending on dataset size)
- **Loss Function:** Sparse Categorical Crossentropy
- **Optimizer:** Adam (learning rate = 1e-4)
- **Evaluation Metric:** Accuracy

## 📂 Contents
- **Model Weights:** Trained EfficientNetB4 model saved in TensorFlow/Keras format.
- **Notebook Files:** Training scripts used for feature extraction and fine-tuning.
