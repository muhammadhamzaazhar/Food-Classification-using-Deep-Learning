import tensorflow as tf

def prep_image(image, img_shape=224):
    img = tf.keras.preprocessing.image.img_to_array(image)
    img = tf.image.resize(img, size=[img_shape, img_shape])
    # No need to normalize manually because EfficientNet models from TensorFlow Hub 
    # include a built-in rescaling layer that normalizes inputs to the range [0,1].
    return img
