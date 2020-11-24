import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions,TouchableOpacity} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 4.699269;
const LONGITUDE = -74.089965;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cnt: 0,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };
    }

    show () {
        this.marker1.showCallout();
    }

    hide () {
        this.marker1.hideCallout();
    }

    genrate = () => {
        var MARKERS = [];
    
        for(var i=0; i<25; i++){
            var objeto =   {
                coordinate: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE/ Math.random(),
                },
                title:i+1,
                description:i+1
            }
            MARKERS.push(objeto);
        } 
        
        this.setState({markers:MARKERS})
    }

    componentDidMount () {
        this.genrate()
    }

    render() {
        const { region, markers } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                provider={this.props.provider}
                style={styles.map}
                initialRegion={region}
                zoomTapEnabled={false}
                >
                {markers.map((item, key) => (
                <Marker
                    ref={ref => {
                    this.marker1 = ref;
                    }}
                    coordinate={item.coordinate}
                    title={"Ubicación "+item.title}
                    description={'Descripción lugar: '+item.description}
                />
                ))}
                </MapView>
                {/* <View style={styles.buttonContainer}>
                    <View style={styles.bubble}>
                        <Text>Tap on markers to see different callouts</Text>
                    </View>
                </View> */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]} onPress={() => this.show()}>
                        <Text>Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bubble, styles.button]} onPress={() => this.hide()}>
                        <Text>Hide</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
    customView: {
        width: 140,
        height: 140,
    },
    plainView: {
        width: 60,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    calloutButton: {
        width: 'auto',
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
});