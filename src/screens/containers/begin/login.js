import React, { Component } from 'react';
import {View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Modal} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from "firebase";

export default class Login extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            show:false,
            email: "",
            password: "",
            firebaseConfig : {
                apiKey: "AIzaSyCPoNVTkQ2yReXu9b-244qnHYawLCe1GBs",
                authDomain: "treinta-1f4b2.firebaseapp.com",
                databaseURL: "https://treinta-1f4b2.firebaseio.com",
                projectId: "treinta-1f4b2",
                storageBucket: "treinta-1f4b2.appspot.com",
                messagingSenderId: "345874707834",
                appId: "1:345874707834:web:2c8f964a65c955a6d292c3",
                measurementId: "G-84ZSNZD9K4"
            },
        };
    }

    SignUp = () => {
        try {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
          this.setState({email:'', password:'', show:!this.state.show})
        //   alert('Usuario Registrado')
        } catch (error) {
          console.log(error);
        }
    };

    SignIn = () => {
        try {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            firebase.auth().onAuthStateChanged(user => {
                // alert('Usuario logueado:'+user.email)
                console.log(user)
                if(user.email){
                    this.setState({show:!this.state.show})
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    handleMap = () => {
        this.props.navigation.navigate('Map')
        this.setState({show:!this.state.show})
    }

    handleInfo = () => {
        this.props.navigation.navigate('ViewWebSite')
        this.setState({show:!this.state.show})
    }

    handleClose = () => {
        this.setState({show:!this.state.show})
    }

    componentDidMount () {
        // Initialize Firebase
        firebase.initializeApp(this.state.firebaseConfig);
    }
    
    render() {
        return (
            <View style={[sG.container]}>
                <ScrollView>
                    <View style={[sG.row_logo]}>
                        <View style={[sG.interno_row_logo]}>
                            <ImageBackground style={[sG.img_logo]} resizeMode='contain' source={require("../../../../assets/icon_treinta.png")} />
                        </View>
                    </View>
                    <View style={[sG.row_20]}>
                        <Text style={[sG.text_welcome]}>Bienvenido a Treinta</Text>
                    </View>
                    <View style={[sG.row_20]}>
                        <View style={[sG.contain_input]}>
                            <View style={[sG.title_input_contain]}>
                                <Text style={[sG.title_input]}>Correo electrónico</Text>
                            </View>
                            <TextInput autoCapitalize = 'none' style={[sG.input]} placeholder='Correo electrónico' placeholderTextColor = '#BDBDBD' value={this.state.email} onChangeText={email => this.setState({ email })}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={[sG.row_20]}>
                        <View style={[sG.contain_input]}>
                            <View style={[sG.title_input_contain]}>
                                <Text style={[sG.title_input]}>Contraseña</Text>
                            </View>
                            <TextInput autoCapitalize = 'none' style={[sG.input]} placeholder='Contraseña' placeholderTextColor = '#BDBDBD' value={this.state.password} onChangeText={password => this.setState({ password })}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={[sG.row_20]}>
                        <TouchableOpacity style={[sG.button]} onPress={this.SignIn}>
                            <Text style={[sG.text_button]}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[sG.row_20]}>
                        <TouchableOpacity style={[sG.button_register]} onPress={this.SignUp}>
                            <Text style={[sG.text_button]}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* inicio modal */}
                <Modal animationType="fade" transparent={true} visible={this.state.show}>
                    <View style={[sG.container_Modal]}>
                        <View style={[sG.card_shadow, sG.card]}>
                        <View style={[sG.card_90_x_90]}>
                            <View style={[sG.card_100_x_25]}>
                                <ImageBackground resizeMode='contain'source={require("../../../../assets/icon_treinta.png")} style={[sG.card_img]}/>
                            </View>
                            <View style={[sG.card_100_x_25]}>
                                <Text style={[sG.card_text_info]}>Obten información más detallada{'\n'}de tus servicios.</Text>
                            </View>
                            <View style={[sG.card_first_button]}>
                                <View style={[sG.card_internal_button]}>
                                    <TouchableOpacity style={[sG.card_button_info]} onPress={this.handleMap}>
                                        <Text style={[sG.text_buttons_info]}>Ver Mapa</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[sG.card_internal_button]}>
                                    <TouchableOpacity style={[sG.card_button_info]} onPress={this.handleInfo}>
                                        <Text style={[sG.text_buttons_info]}>Ir a web</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[sG.card_100_x_25]}>
                                <TouchableOpacity style={[sG.card_button_cancel]} onPress={this.handleClose}>
                                    <Text style={[sG.text_buttons_info]}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </View>
                </Modal>
                {/* fin modal */}
            </View>
        );
    }
}

const sG = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    row_logo: {
        flex: 1,
        aspectRatio: 1 / 0.7,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    interno_row_logo:{
        height:'50%',
        width:'70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_logo:{
        height:'100%',
        width:'100%',
    },
    row_20: {
        flex: 1,
        aspectRatio: 1 / 0.2,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_welcome:{
        fontWeight: 'bold',
        fontSize: '17.5rem',
        color: '$colorSecondary'
    },
    contain_input:{
        height:'85%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$colorLight',
        borderRadius: "10rem",
        overflow: 'hidden',
    },
    title_input_contain:{
        height:'30%',
        width:'85%',
    },
    title_input:{
        fontSize: '10rem',
        color: '$colorPrimary',
    },
    input:{
        height:'60%',
        width:'85%',
        fontSize: '12.5rem',
    },
    button:{
        height:'80%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$colorSecondary',
        borderRadius: "10rem",
        overflow: 'hidden',
    },
    text_button:{
        fontWeight: 'bold',
        fontSize: '12.5rem',
        color: '#ffffff'
    },
    button_register:{
        height:'80%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$colorPrimary',
        borderRadius: "10rem",
        overflow: 'hidden',
    },

    //estilos modal
    container_Modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
    },
    card:{
        height:'40%',
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: "10rem",
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#bbbbbb',
    },
    card_shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0.5,
          height: 0,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
    },
    card_90_x_90: {
        height:'90%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card_100_x_25: {
        height:'25%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card_img: {
        height:'90%',
        width:'80%',
    },
    card_text_info: {
        textAlign: 'center',
        fontSize: '12.5rem',
    },
    card_button_info:{
        height:'90%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10rem",
        overflow: 'hidden',
        backgroundColor: '$colorPrimary',
    },
    card_first_button:{
        height:'25%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    card_internal_button: {
        height:'100%',
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_buttons_info: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '12.5rem',
    },
    card_button_cancel: {
        height:'70%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10rem",
        overflow: 'hidden',
        backgroundColor: '$colorSecondary'
    }
  });