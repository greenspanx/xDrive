import React from 'react';
import { 
	StatusBar, 
	TouchableOpacity, 
	TextInput, 
	StyleSheet, 
	Image, 
	ImageBackground, 
	Dimensions, 
	ScrollView, 
	Platform, 
	SafeAreaView, 
	FlatList, 
	ToolbarAndroid 
} from 'react-native';
import { 
	Container, 
	Header, 
	Content, 
	Button, 
	Icon, 
	Text, 
	Separator, 
	DatePicker, 
	ListItem, 
	View, 
	Card 
} from 'native-base';

import NavigationService from '@Service/Navigation';


import Style from '@Theme/Style';
import Styles from '@Screen/Public/Lessons/Style';

export default class extends React.Component {

    render() {

        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />

                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent onPress={() => {
                            NavigationService.navigate('PublicLessons')
                        }}>
                            <Icon type="FontAwesome" name="angle-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>

                <View style={Styles.detail}>
                    <Image source={require('@Asset/images/lesson-beginner.png')} style={Styles.detailImg} />
                    <Text style={Styles.detailTitle}>Begginer Lesson.</Text>
                    <Text style={Styles.detailDesc}>
                        Begginer Lesson adipiscing elit. or. Morbi euismod blandit enim sed euismod.{"\n\n"}
                        Aliquam egestas  lectus. Praesent rhoncus augue sit amet varius vulputate.{"\n\n"}
                        Morbi non eros llentesque.
                    </Text>
                </View>

            </Content>

            <View style={Style.bot}>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicHome') }}>
                    <Icon type="FontAwesome" name="home" style={Style.botIcon} />
                    <Text style={Style.botText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicPlan') }}>
                    <Icon type="MaterialCommunityIcons" name="cards" style={Style.botIcon} />
                    <Text style={Style.botText}>Plan</Text>
                </TouchableOpacity>
                <View style={Style.botPop}>
                    <TouchableOpacity style={Style.botPopBtn} onPress={() => { NavigationService.navigate('PublicBooking') }}>
                        <Text style={Style.botPopTextSm}>Book</Text>
                        <Text style={Style.botPopText}>Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicLessons') }}>
                    <Icon type="MaterialCommunityIcons" name="car" style={Style.botIconActive} />
                    <Text style={Style.botTextActive}>Lessons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicAccount') }}>
                    <Icon type="FontAwesome" name="user" style={Style.botIcon} />
                    <Text style={Style.botText}>Account</Text>
                </TouchableOpacity>
            </View>

        </Container>
    }
}