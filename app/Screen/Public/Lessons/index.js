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

import LESSONS from '@Content/Lessons';


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
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon type="FontAwesome" name="angle-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleText}>{'Lessons'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>

                <View style={Styles.lessons}>
                    <FlatList
                        data={LESSONS}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicLessonsDetail') }}>
                                <View style={Styles.lessonsItem}>
                                    <View style={Styles.lessonsItemLeft}>
                                        <Image source={item.image} style={Styles.lessonsItemImg} />
                                    </View>
                                    <View style={Styles.lessonsItemContent}>
                                        <Text style={Styles.lessonsItemTitle}>{item.title}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
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