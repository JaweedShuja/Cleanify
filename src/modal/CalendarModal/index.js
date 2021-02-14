import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native'
import RightArrow from '../../images/rightArrow.png'

import CatIcon from '../../images/catIcon.png'
import DogIcon from '../../images/dogIcon.png'
import OtherIcon from '../../images/otherIcon.png'
import MyMonthArray from '../../utils/Calender'
import BookingData from '../../utils/BookingData'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Helper from '../../utils/Helper'
import {Colors} from '../../utils/Colors'
var d = new Date()

class CalendarModal extends Component {


    constructor(props) {
        super(props)
        this.state = {
            jun: [
                [-1, 1, 2, 3, 4, 5, 6],
                [7, 8, 9, 10, 11, 12, 13],
                [14, 15, 16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1],
            ],
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'],
            selectedDay: 0,
            textColor: '',
            nextButtonVisible: false,
            petOption: false,
            optionDoYouHave: false,
            optionWhatkind: false,
            optionHowMany: false,

            optionYesNo: false,
            optionKind: false,
            optionSelectHowMany: false,

            selectedPet: '',
            selectedImage: '../../images/otherIcon.png',

            petOneSelected: false,
            petTwoSelected: false,
            petThreeSelected: false,
            petFourSelected: false,
            petFiveSelected: false,

            timeOption: false,
            currentMonthIndex: d.getMonth(),
            currentYear: d.getFullYear(),
            monthNameArray: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],

            preMonth: '',
            curMonth: '',
            nexMonth: '',

            timePickerVisible: false,
            time: ''
        }
    }
    componentDidMount() {
        this.setCalender()
    }
    setCalender() {
        this.setState({
            jun: MyMonthArray(this.state.currentMonthIndex, this.state.currentYear)
        })
    }
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }
    isDatePass(value) {
        if (this.state.currentMonthIndex < d.getMonth()) {
            return true
        }
        else if (this.state.currentMonthIndex == d.getMonth()) {
            if (value >= d.getDate()) {
                return false
            }
            else {
                return true
            }
        }
        else {
            return false
        }
    }
    tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        var isAM_PM = ''
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            isAM_PM = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }

        var myTime = time[0] + ":" + time[2] + " " + isAM_PM
        // return time.join(','); // return adjusted time or original string
        BookingData.time = time[0] + ":" + time[2];
        BookingData.time_am_pm = isAM_PM
        console.log(BookingData)
        return myTime
    }
    render() {

        const calendar = [];
        var bgColor = "";
        calendar.push(
            <View style={{ flexDirection: 'row' }}>
                {this.state.days.map((value, index) => {

                    return <View style={{
                        height: 34,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>

                        <Text style={{ color: '#FF2455' }}>{value}</Text>
                    </View>
                })}
            </View>
        );
        for (let index = 0; index < 6; index++) {
            calendar.push(
                <View style={{ flexDirection: 'row' }}>

                    {this.state.jun[index].map((value, index) => {
                        if (value == -1) {
                            bgColor = '#FF2455'
                            // this.setState{}
                        } else if (index == 0 || index == 6) {
                            bgColor = '#ffc4d1'
                        }
                        // else if(value == this.state.selectedDay){
                        //     bgColor = '#FF2455'
                        // }
                        else {
                            bgColor = 'white'
                        }
                        return <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (value != -1) {
                                    if (!this.isDatePass(value)) {
                                        this.setState({
                                            selectedDay: value,
                                            nextButtonVisible: true,
                                        })
                                        BookingData.start_date = value + "-" + (this.state.currentMonthIndex + 1) + "-" + this.state.currentYear
                                        console.log(BookingData)
                                    }
                                }
                            }}
                            style={{
                                height: 34,
                                width: 40,
                                borderWidth: 1,
                                borderColor: 'black',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: this.state.selectedDay == value ? '#FF2455' : bgColor
                            }}>

                            {value == -1 ? null : <Text style={{
                                opacity: this.isDatePass(value) ? 0.3 : 1
                            }}>{value}</Text>}
                        </TouchableOpacity>
                    })}
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.childContainer}>

                    <View style={styles.topMonthContainer}>
                        {
                            this.state.currentMonthIndex != 0 ?
                                <TouchableOpacity
                                    onPress={async () => {
                                        await this.setState({
                                            currentMonthIndex: this.state.currentMonthIndex - 1
                                        })
                                        this.setCalender()
                                    }}
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        source={require('../../images/backIcon.webp')}
                                        style={{
                                            height: 30,
                                            width: 30
                                        }}
                                    />

                                </TouchableOpacity> : null
                        }
                        {

                            this.state.currentMonthIndex != 0 ?


                                <Text style={styles.monthText}>{this.state.monthNameArray[this.state.currentMonthIndex - 1]}</Text> : null

                        }

                        <View style={styles.currentMonthContainer}>
                            <Text style={styles.currentMonthText}>
                                {this.state.monthNameArray[this.state.currentMonthIndex] + "," + this.state.currentYear}
                            </Text>
                        </View>
                        <Text style={styles.monthText}>{this.state.monthNameArray[this.state.currentMonthIndex + 1]}</Text>
                        {
                            this.state.currentMonthIndex != 11 ?
                                <TouchableOpacity
                                    onPress={async () => {
                                        await this.setState({
                                            currentMonthIndex: this.state.currentMonthIndex + 1
                                        })
                                        this.setCalender()
                                    }}
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        source={require('../../images/forwardIcon.webp')}
                                        style={{
                                            height: 30,
                                            width: 30
                                        }}
                                    />

                                </TouchableOpacity> : null
                        }

                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        {calendar}
                    </View>

                    {/* <TouchableOpacity
                onPress={() => this.closeModal()} 
                style={{backgroundColor:'red', height:50, width:50}}>
                    <Text>CLOSE</Text>
                </TouchableOpacity> */}
                </View>
                {this.state.nextButtonVisible ? <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            nextButtonVisible: false,
                            petOption: true,
                            optionDoYouHave: true,
                            optionYesNo: true,
                        })
                    }}
                    style={{
                        height: 40,
                        width: 120,
                        backgroundColor: '#F90505',
                        borderRadius: 33,
                        position: 'absolute',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 10, height: 10
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4,
                    }}>

                    <Image
                        style={{ height: 20, width: 20, position: 'absolute', right: 10, alignSelf: 'center' }}
                        source={RightArrow}
                    />
                    <Text style={{ fontSize: 13, color: 'white', alignSelf: 'center' }}>
                        NEXT
                    </Text>

                </TouchableOpacity> : null}

                {this.state.petOption ? <View style={{
                    height: 200,
                    width: 300,
                    position: 'absolute',
                    borderRadius: 5,


                }}>

                    <View style={{
                        height: 120,
                        width: 220,
                        backgroundColor: 'white',
                        alignSelf: 'center',
                        borderRadius: 5,
                        marginTop: 30,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 10, height: 10
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4,
                    }}>
                        {this.state.optionDoYouHave ? <Text
                            style={{ color: 'gray', alignSelf: 'center', marginTop: 15, }}
                        >
                            Do you have Pets?
                        </Text> : null}
                        {this.state.optionWhatkind ? <Text
                            style={{ color: 'gray', alignSelf: 'center', marginTop: 15, }}
                        >
                            What kind of pets?
                        </Text> : null}
                        {this.state.optionHowMany ? <Text
                            style={{ color: 'gray', alignSelf: 'center', marginTop: 15, }}
                        >
                            How Many?
                         </Text> : null}

                        {this.state.optionYesNo ?
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, }}>
                                <TouchableOpacity

                                    onPress={() => {
                                        this.setState({
                                            optionDoYouHave: false,
                                            optionYesNo: false,
                                            optionWhatkind: true,
                                            optionKind: true,
                                        })
                                        BookingData.is_pet = "1"
                                    }
                                    }
                                    style={{
                                        height: 25,
                                        width: 44,
                                        backgroundColor: '#F90505',
                                        borderRadius: 33,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 10, height: 10
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>YES</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        //yaha
                                        BookingData.is_pet = "0"
                                        // this.closeModal()
                                        this.setState({
                                            petOption: false,
                                            optionDoYouHave: false,
                                            optionWhatkind: false,
                                            optionHowMany: false,

                                            optionYesNo: false,
                                            optionKind: false,
                                            optionSelectHowMany: false,

                                            timeOption: true,
                                        })
                                        console.log(BookingData)
                                    }}
                                    style={{
                                        height: 25,
                                        width: 44,
                                        backgroundColor: '#0B72FB',
                                        borderRadius: 33,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 10, height: 10
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>NO</Text>
                                </TouchableOpacity>

                            </View>
                            : null}

                        {this.state.optionKind ?
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            selectedPet: 'dog',
                                            optionWhatkind: false,
                                            optionKind: false,
                                            optionHowMany: true,
                                            optionSelectHowMany: true,
                                            selectedImage: require('../../images/dogIcon.png')

                                        })
                                        BookingData.pet_id = '1'
                                    }}
                                    style={{
                                        height: 25,
                                        width: 44,
                                        borderRadius: 33,
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}>
                                    <Image
                                        style={{ height: 28, width: 28 }}
                                        source={DogIcon}
                                    />
                                    <Text style={{ color: 'gray', fontSize: 13 }}>Cat</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            selectedPet: 'cat',
                                            optionWhatkind: false,
                                            optionKind: false,
                                            optionHowMany: true,
                                            optionSelectHowMany: true,
                                            selectedImage: require('../../images/catIcon.png')

                                        })
                                        BookingData.pet_id = '2'
                                    }}
                                    style={{ height: 25, width: 44, borderRadius: 33, alignItems: 'center', justifyContent: 'center', marginLeft: 10, }}>
                                    <Image
                                        style={{ height: 28, width: 28 }}
                                        source={CatIcon}
                                    />
                                    <Text style={{ color: 'gray', fontSize: 13 }}>Dog</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            selectedPet: 'othher',
                                            optionWhatkind: false,
                                            optionKind: false,
                                            optionHowMany: true,
                                            optionSelectHowMany: true,
                                            selectedImage: require('../../images/otherIcon.png')

                                        })
                                        BookingData.pet_id = '3'
                                    }}
                                    style={{ height: 25, width: 44, borderRadius: 33, alignItems: 'center', justifyContent: 'center', marginLeft: 10, }}>
                                    <Image
                                        style={{ height: 28, width: 28 }}
                                        source={OtherIcon}
                                    />
                                    <Text style={{ color: 'gray', fontSize: 13 }}>Other</Text>
                                </TouchableOpacity>

                            </View>
                            : null}

                        {/* javed */}
                        {this.state.optionHowMany ?
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            petOneSelected: true,
                                        })
                                        BookingData.pet_count = '1'
                                    }}
                                    style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5, }}>


                                    <Image
                                        style={{ height: 28, width: 28, opacity: this.state.petOneSelected ? 1 : 0.2 }}
                                        source={this.state.selectedImage}
                                    />

                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            petOneSelected: true,
                                            petTwoSelected: true,
                                        })
                                        BookingData.pet_count = '2'
                                    }}
                                    style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5, }}>
                                    <Image
                                        style={{ height: 28, width: 28, opacity: this.state.petTwoSelected ? 1 : 0.2 }}
                                        source={this.state.selectedImage}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            petOneSelected: true,
                                            petTwoSelected: true,
                                            petThreeSelected: true,
                                        })
                                        BookingData.pet_count = '3'
                                    }}
                                    style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5, }}>
                                    <Image
                                        style={{ height: 28, width: 28, opacity: this.state.petThreeSelected ? 1 : 0.2 }}
                                        source={this.state.selectedImage}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            petOneSelected: true,
                                            petTwoSelected: true,
                                            petThreeSelected: true,
                                            petFourSelected: true,
                                        })
                                        BookingData.pet_count = '4'
                                    }}
                                    style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5, }}>
                                    <Image
                                        style={{ height: 28, width: 28, opacity: this.state.petFourSelected ? 1 : 0.2 }}
                                        source={this.state.selectedImage}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            petOneSelected: true,
                                            petTwoSelected: true,
                                            petThreeSelected: true,
                                            petFourSelected: true,
                                            petFiveSelected: true,
                                        })
                                        BookingData.pet_count = '5'
                                    }}
                                    style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5, }}>
                                    <Image
                                        style={{ height: 28, width: 28, opacity: this.state.petFiveSelected ? 1 : 0.2 }}
                                        source={this.state.selectedImage}
                                    />
                                </TouchableOpacity>

                            </View>
                            : null}

                    </View>


                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                petOption: false,
                                optionDoYouHave: false,
                                optionWhatkind: false,
                                optionHowMany: false,

                                optionYesNo: false,
                                optionKind: false,
                                optionSelectHowMany: false,

                                timeOption: true,
                            })
                        }}
                        style={{
                            height: 40,
                            width: 130,
                            backgroundColor: '#F90505',
                            borderRadius: 33,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 10, height: 10
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,
                            elevation: 4,
                        }}>
                        <Image
                            style={{ height: 20, width: 20, position: 'absolute', right: 10, alignSelf: 'center' }}
                            source={RightArrow}
                        />
                        <Text style={{ fontSize: 13, color: 'white', alignSelf: 'center' }}>
                            NEXT
                    </Text>


                    </TouchableOpacity>

                </View> : null}

                {this.state.timeOption ? <View style={{
                    height: 200,
                    width: 200,
                    position: 'absolute',
                }}>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                timePickerVisible: true
                            })
                        }}
                        style={{
                            height: 40,
                            width: 150,
                            backgroundColor: 'white',
                            borderRadius: 33,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 40,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 10, height: 10
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,
                            elevation: 4,
                        }}>
                        <Text>
                            {this.state.time == '' ? 'Select Time' : this.state.time}
                        </Text>

                        {/* <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderRightWidth: 1,
                            width: 75,
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
                                10
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderLeftWidth: 1,
                            width: 75,
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
                                15
                            </Text>

                        </TouchableOpacity> */}


                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if(BookingData.time == ''){
                                Helper.showToast('Please Select Time!')
                            }
                            else{

                                this.closeModal()
                            }
                        }}
                        style={{
                            height: 40,
                            width: 140,
                            backgroundColor: '#F90505',
                            borderRadius: 33,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 10, height: 10
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,
                            elevation: 4,
                        }}>
                        <Image
                            style={{ height: 20, width: 20, position: 'absolute', right: 10, alignSelf: 'center' }}
                            source={RightArrow}
                        />
                        <Text style={{ fontSize: 13, color: 'white', alignSelf: 'center' }}>
                            SCHEDULE
                    </Text>


                    </TouchableOpacity>



                </View> : null}
                <DateTimePickerModal
                style ={{backgroundColor: Colors.themeRed}}
                    isVisible={this.state.timePickerVisible}
                    mode={'time'}

                    is24Hour={false}
                    onConfirm={(time) => {
                        var timeString12hr = new Date(time).toLocaleTimeString({ timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' })
                        // console.log(time)
                        // console.log(this.tConvert(timeString12hr))
                        this.setState({
                            timePickerVisible: false,
                            time: this.tConvert(timeString12hr)
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            timePickerVisible: false
                        })
                    }}
                />
            </View>
        )
    }
}

export default CalendarModal

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    childContainer: {
        height: 350,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    topMonthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
    },
    monthText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    currentMonthContainer: {
        height: 40,
        width: 130,
        backgroundColor: '#F90505',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10, height: 10
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    currentMonthText: {
        fontSize: 18,
        color: 'white',
    }

})