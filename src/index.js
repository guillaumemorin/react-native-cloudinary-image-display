import React, {Component} from 'react';
import {Cloudinary} from 'cloudinary-core';
import defaultStyle from './style';
import PropTypes from 'prop-types';
import {View, ImageBackground, PixelRatio, Dimensions, Text} from 'react-native';

export default class CloudinaryImage extends Component {
    static propTypes = {
        cloudName: PropTypes.string,
        imageId: PropTypes.string,
        options: PropTypes.object,
        sideMargin: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.number,
        borderRadius: PropTypes.number
    }
    static defaultProps = {
        cloudName: ' ',
        options: {
            crop: 'fill',
            format: 'jpg',
            quality: 100,
            secure: true,
            cdn_subdomain: true
        },
        style: {},
        sideMargin: 0,
        borderRadius: 0
    }
    constructor(props){
        super(props);
        this.onLoad = () => this.loaded();
        this.onError = () => this.error();
        this.state = {
            error: false,
            loaded: false
        };
    }
    getImageUri(width, computedHeight) {
        const {imageId, cloudName, options} = this.props;
        const cloudinary = Cloudinary.new({cloud_name: cloudName});
        return cloudinary.url(
            imageId,
            {
                ...options,
                width: PixelRatio.getPixelSizeForLayoutSize(width),
                height: PixelRatio.getPixelSizeForLayoutSize(computedHeight)
            }
        );
    }
    loaded() {
        this.setState({loaded: true});
    }
    error() {
        this.setState({error: true});
    }
    render() {
        const {loaded, error} = this.state;
        const {sideMargin, width, height, style, borderRadius} = this.props;
        const layout = Dimensions.get('window');
        const computedWidth = width - (2 * sideMargin);
        const ratio = computedWidth / layout.width;
        const computedHeight = height / ratio;
        const imageDimensions = {width: layout.width - (2 * sideMargin), height: computedHeight};
        if(error) return <Text style={defaultStyle.errorText}>{'Error while loading image'}</Text>;
        return (
            <ImageBackground style={[imageDimensions, style]}
                   borderRadius={borderRadius}
                   onLoad={this.onLoad}
                   onError={this.onError}
                   source={{
                       uri: this.getImageUri(layout.width, computedHeight),
                       cache: 'force-cache'
                   }}>
                   {!loaded && <View style={defaultStyle.loadingContainer}>
                       <Text style={defaultStyle.loadingText}>{'Loading...'}</Text>
                   </View>}
            </ImageBackground>
        )
    }
}
