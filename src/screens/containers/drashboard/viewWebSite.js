import * as React from "react";
import { Text, View, StyleSheet, ScrollView} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

export default class ViewWebSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Registra todas las ventas y gastos",
          text:
            "Registra los ingresos, los gastos y las cuentas por cobrar y pagar",
          logo: "cash-register",
        },
        {
          title: "Visualiza la utilidad del negocio al instante",
          text:
            "Obtén información diaria, semanal y mensual de la utilidad del negocio",
          logo: "poll",
        },
        {
          title: "Cobra puntualmente la deuda de tus clientes",
          text:
            "Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes",
          logo: "dollar-sign",
        },
        {
          title: "Recuerda cuando pagar a proveedores y acreedores",
          text: "Visualiza las fechas de vencimiento de tus facturas y recibos",
          logo: "exclamation-triangle",
        },
        {
          title: "Los datos se mantienen seguros",
          text:
            "Las cuentas por cobrar son muy importantes, no las pierda. Con Treinta, los registros se mantienen seguros.",
          logo: "lock",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 20,
          height: 250,
          padding: 20,
          marginLeft: 15,
          marginRight: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}
      >
        <Text style={styles.titleCCard}>{item.title}</Text>
        <View style={styles.iconCard}>
          <FontAwesome5 name={item.logo} size={60} color="#FED209" />
        </View>
        <Text style={{ textAlign: "center" }}>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 4 }}>
        <View>
          <Text style={styles.title}>
            La contabilidad de tu negocio en tu mano
          </Text>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Miles de micro y pequeñas empresas confían en Treinta
          </Text>
          <Text style={{ textAlign: "center" }}>
            Treinta es una aplicación GRATUITA para administrar fácilmente las
            finanzas de tu negocio, en cualquier momento y en cualquier lugar.
          </Text>
          <View style={styles.card}>
            <View style={styles.iconCard}>
              <FontAwesome5 name="user-alt" size={30} color="#FED209" />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FED209",
                }}
              >
                Jhon Moreno
              </Text>
            </View>
            <View>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              Puedo conocer mi utilidad mensual sin preocuparme de la pérdida de
              información. ¡Tengo completa visualización de mi flujo de caja y
              puedo planificar la apertura de otra tienda de celulares en el
              futuro!
            </Text>
           
            
            <Text
              style={{
                backgroundColor: "#FED209",
                textAlign: "center",
                borderRadius: 20,
                marginHorizontal:30
              }}
            >
              Propietario de Celulares y Electrónica
            </Text>
            </View>
            
          </View>
          <View style={styles.card}>
            <View style={styles.iconCard}>
              <FontAwesome5 name="user-alt" size={30} color="#FED209" />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FED209",
                }}
              >
                Sebastian Herrera
              </Text>
            </View>
            <View>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
            Al principio hacía la contabilidad de forma muy manual pero me daba pereza escribir todo manualmente. Desde que uso Treinta, ¡todo se ha vuelto más fácil!
            </Text>
           
            
            <Text
              style={{
                backgroundColor: "#FED209",
                textAlign: "center",
                borderRadius: 20,
                marginHorizontal:30
              }}
            >
              Comerciante de frutas y verduras
            </Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },
  titleCCard: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  iconCard: {
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
  tinyLogo: {
    height: 50,
  },
  card: {
    flexWrap:'wrap',
    flexDirection:'row',
    backgroundColor: "floralwhite",
    borderRadius: 20,
    height: 200,
    margin:10,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
