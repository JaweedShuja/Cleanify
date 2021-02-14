import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    FlatList,
    ActivityIndicator
} from 'react-native'
import AddHome from '../../images/addHome.png'
import RangeBar1 from '../../images/rangeBar1.png'
import RangeBar2 from '../../images/rangeBar2.png'

import Laundry from '../../images/Laundry.png'
import Ironing from '../../images/Ironing.png'
import Windows from '../../images/Windows.png'
import Shoe_wash from '../../images/Shoe_wash.png'
import Fridge from '../../images/Fridge.png'
import Stove from '../../images/Stove.png'
import Microwave from '../../images/Microwave.png'
import Cabinets from '../../images/Cabinets.png'


import Down from '../../images/down.png'
import Top from '../../images/top.png'

import Calendar from '../../images/calendar.png'

import CalendarModal from '../../modal/CalendarModal'
import BookingData from '../../utils/BookingData'
import Helper from '../../utils/Helper'
import { Fonts } from '../../utils/Fonts'

import { ScheduleDateTimePayload } from '../../networking/payloads';
import { PostRequestWithAuthentication } from '../../networking/postRequest';
import { ScheduleDateTimeAPI } from '../../networking/api';

class RequestScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            line2: false,
            isModalVisible: false,
            bgColor: 'white',
            isDateSet: 0,
            bedRoomPrice: 0,
            bathRoomPrice: 0,
            extras: [],
            extrasImages: [
                Laundry,
                Ironing,
                Windows,
                Shoe_wash,
                Fridge,
                Stove,
            ],
            services: [],
            extraPrice: 0
        }
    }
    toggleService(id, price) {
        console.log('u')
        console.log(price)
        if (this.serviceAlreadyPresent(id)) {
            this.removeService(id, price)
        }
        else {
            this.addService(id, price)
        }
    }
    serviceAlreadyPresent(id) {
        for (let i = 0; i < BookingData.services.length; i++) {
            if (BookingData.services[i] == id) {
                return true
            }
        }
        return false
    }
    addService(id, price) {
        BookingData.services.push(id)
        console.log(BookingData)
        this.setState({
            services: BookingData.services,
            extraPrice: this.state.extraPrice + price
        })
    }
    removeService(id, price) {
        var filteredServices = BookingData.services.filter(el => { return el != id })
        BookingData.services = filteredServices
        this.setState({
            services: BookingData.services,
            extraPrice: this.state.extraPrice - price
        })
    }
    componentDidMount() {
        this.getPrices()
    }
    async getPrices() {
        let ExtraData = await Helper.getExtraData();
        this.setState({
            bedRoomPrice: ExtraData.bedRoomPrice,
            bathRoomPrice: ExtraData.bathRoomPrice,
            extras: ExtraData.extras
        })

    }
    changeModalVisibility = (bool) => {
        if (bool == true) {
            this.setState({
                bgColor: 'lightgray'
            })
        }
        else {
            this.setState({
                bgColor: 'white',
            })
            this.setState({
                isDateSet: 1
            })
            console.log('ye line chali')
            console.log(this.state.isDateSet)
        }
        this.setState({ isModalVisible: bool });
        console.log(this.state.isDateSet)
    }
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.bgColor }]}>
                {/* header */}
                <View style={{
                    backgroundColor: "white",
                    height: 55,
                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2.25,
                    elevation: 4,
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            style={{ height: 24, width: 33, marginLeft: 20 }}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>
                    <View style={{
                        height: 40,
                        width: 40,
                        backgroundColor: '#F90505',
                        borderRadius: 70,
                        marginLeft: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={AddHome}
                        />
                    </View>
                    <Text style={{ marginLeft: 20, color: '#6A7980', fontSize:13, flex:1, }}>{BookingData.address}</Text>

                </View>

                {/* ranges */}
                <View style={styles.range}>
                    <Text>{'Bedrooms (' + BookingData.total_rooms + ")"}</Text>
                    <Image
                        style={styles.rangeImage}
                        source={RangeBar1}
                    />
                </View>

                <View style={styles.range}>
                    <Text>{'Bathrooms (' + BookingData.total_bathrooms + ")"}</Text>
                    <Image
                        style={styles.rangeImage2}
                        source={RangeBar2}
                    />
                </View>

                {/* amount     */}

                <Text style={styles.totolCostText}>Total Cost</Text>

                <Text style={styles.costAmount}>{'R' + ((BookingData.total_bathrooms * this.state.bathRoomPrice) + (BookingData.total_rooms * this.state.bedRoomPrice) + parseInt(this.state.extraPrice))}</Text>

                <View style={styles.amountBar}></View>

                {/* Extras */}

                <View>
                    <Text style={styles.extraText}>Extras</Text>

                    <View style={{
                        marginHorizontal: 20
                    }}>
                        <FlatList
                            data={this.state.extras}
                            numColumns={4}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{
                                        width: '25%',
                                        alignItems: 'center',
                                    }}>
                                        <View
                                            // onPress={() => this.toggleService(item.id, parseInt(item.service_price))}
                                            style={{
                                                height: 60,
                                                width: 60,
                                                borderRadius: 60,
                                                backgroundColor: 'red',
                                                margin: 5,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderColor: 'black',
                                                borderWidth: this.serviceAlreadyPresent(item.id) ? 5 : 0
                                            }}>
                                            <Image
                                                style={styles.itemImage}
                                                source={this.state.extrasImages[index]}
                                            />

                                        </View>

                                        <Text style={{
                                            fontFamily: Fonts.Arimo,
                                        }}>{item.service_name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    {/* </View> */}
                    <View style={styles.bottomLine}>

                    </View>
                </View>

                {/* time and date */}

                <View style={styles.timeDateContainer}>
                    <Image
                        source={Calendar}
                        style={styles.calenderImage}
                    />
                    <TouchableOpacity
                        onPress={() => this.changeModalVisibility(true)}
                    >
                        <Text style={styles.calenderText}>
                            {BookingData.start_date == '' ? 'Schedule time & Date' : BookingData.start_date}
                        </Text>
                    </TouchableOpacity>


                </View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#F90505',
                        marginTop: 5,
                        alignSelf: 'center'
                    }}
                >
                    {BookingData.time == '' ? null : BookingData.time + " " + BookingData.time_am_pm}
                </Text>


                {/* Button */}

                <View

                    style={styles.btnContainer}>
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        onPress={async () => {
                            this.handleSubmit()
                        }}
                        style={[styles.Btn, { opacity: this.state.isLoading ? 0.5 : 1 }]}>

                        {
                            this.state.isLoading ?
                            <ActivityIndicator  size={'small'} color={'white'} />
                            :
                        <Text
                            style={styles.BtnText}
                        >BOOK A CLEANING</Text>}
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
                    animationType='fade'>
                    <CalendarModal changeModalVisibility={this.changeModalVisibility} />
                </Modal>

            </View>
        )
    }

    async handleSubmit() {
        if (BookingData.start_date == '' || BookingData.time == '') {
            Helper.showToast('Please Select Date and Time!')
        } else {

            

            this.setState({ isLoading: true });
            const payload = ScheduleDateTimePayload(
                BookingData.start_date,
                BookingData.time,
                BookingData.time_am_pm,
                BookingData.is_pet,
                BookingData.pet_count,
                BookingData.pet_id,
            );
            // console.log(payload)
            var responce = await PostRequestWithAuthentication(payload, ScheduleDateTimeAPI(BookingData.bookingDraftId), true);
            // console.log(JSON.stringify(responce));
            this.setState({ isLoading: false });
            if (responce.status == 'success') {
                // Helper.showToast('Address Added Successfully');
                this.props.navigation.navigate('ConfirmBookingScreen');
            }
            else {
                Helper.showToast('There is unknown error!')
            }

        }
    }
}

export default RequestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    range: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,

    },
    rangeImage: {
        height: 48.96,
        width: 168,
        marginLeft: 10,
    },
    rangeImage2: {
        height: 48.8,
        width: 160,
        marginLeft: 15,
    },
    totolCostText: {
        marginTop: 20,
        alignSelf: 'center',
    },
    costAmount: {
        fontSize: 18,
        marginTop: 10,
        alignSelf: 'center',
    },
    amountBar: {
        height: 1,
        width: 150,
        backgroundColor: '#F90505',
        alignSelf: 'center',
        marginTop: 10,
    },
    extraText: {
        marginTop: 10,
        alignSelf: 'center',
    },
    scroller: {
        height: 90,
        marginTop: 10,
    },
    scrollItems: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
    },
    ItemContainer: {
        alignItems: 'center',
    },
    Item: {
        height: 60,
        width: 60,
        borderRadius: 70,
        backgroundColor: '#F90505',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        height: 30,
        width: 30,
    },
    downContainer: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    down: {
        height: 16.24,
        width: 30,
    },
    bottomLine: {
        height: 1,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#969FAA',
        marginTop: 10,
    },
    timeDateContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
    },
    calenderImage: {
        height: 30,
        width: 30,
    },
    calenderText: {
        fontWeight: 'bold',
        color: '#F90505',
        marginTop: 5,
        marginLeft: 5,
    },
    btnContainer: {
        flex: 1,
    },
    Btn: {
        height: 45,
        width: '80%',
        backgroundColor: '#F90505',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BtnText: {
        fontWeight: 'bold',
        color: 'white',
    }
})