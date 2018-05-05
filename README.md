<h1 align="center">
	React Native Cloudinary Image Display
</h1>
<p align="center">
	<a href="https://badge.fury.io/js/react-native-cloudinary-image-display"><img src="https://badge.fury.io/js/react-native-cloudinary-image-display.svg" alt="npm version" height="18"></a>
    <a href='https://semaphoreci.com/guillaumemorin/react-native-cloudinary-image-display'> <img src='https://semaphoreci.com/api/v1/guillaumemorin/react-native-cloudinary-image-display/branches/master/badge.svg' alt='Build Status'></a>
</p>

## Installation
```
npm i --save react-native-cloudinary-image-display
```

## Props

In order to properly use this library you have to provide it with a few configuration parameters:

### Required:

### `cloud_name`
The cloudinary cloud name associated with your Cloudinary account.

### `imageId`
Id of the uploaded image.

### `width`
Original width of the uploaded image.

### `height`
Height of the uploaded image.

### Optional:

### `options`
In addition to the mandatory cloud_name identifier, there are also a number of optional parameters you may want to define.
Please refer to [Cloudinary Documentation](https://cloudinary.com/documentation/solution_overview#configuration_parameters) for more information on these parameters.

if no options object is set, following default options will be used:
```
{
	crop: 'fill',
	format: 'jpg',
	quality: 100,
	secure: true,
	cdn_subdomain: true
}
```

### `style`
Custom style to apply to Image.

### `borderRadius`
Border radius to apply to Image

### `sideMargin`
Side margin to apply to Image



## Usage
```
import CloudinaryImage from 'react-native-cloudinary-image-display';

<CloudinaryImage cloudName={'cloudName'}
				imageId={'gk9cslue8qeba5djqnzg'}
				width={2448}
				height={3264} />
```
