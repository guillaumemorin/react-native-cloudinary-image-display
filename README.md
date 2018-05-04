<h1 align="center">
	React Native Cloudinary Image Display
</h1>
<p align="center">
    <a href='https://semaphoreci.com/guillaumemorin/react-native-cloudinary-image-display'> <img src='https://semaphoreci.com/api/v1/guillaumemorin/react-native-cloudinary-image-display/branches/master/badge.svg' alt='Build Status'></a>
</p>

## 📦 Installation
```
npm i --save 'react-native-cloudinary-image-display'
```

## ⚙️ Setup

In order to properly use this library you have to provide it with a few configuration parameters:

Required:

* `cloud_name` - The cloudinary cloud name associated with your Cloudinary account.
* `imageId` - Id of the uploaded image.
* `width` - width of the uploaded image.
* `height` - Height of the uploaded image.

Optional:

Please refer to [Cloudinary Documentation](http://cloudinary.com/documentation/rails_additional_topics#configuration_options) for information on these parameters.

## 🚀 Usage
```
import CloudinaryImage from 'react-native-cloudinary-image-display';

<CloudinaryImage cloudName={'cloudName'}
				 imageId={'gk9cslue8qeba5djqnzg'}
				 width={2448}
				 height={3264} />
```
