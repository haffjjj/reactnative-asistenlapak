import React, {Component} from 'react'
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import { Content, Text, View, Header, Container, Form, Item, Icon, Input, Button } from 'native-base'
import {} from 'react-navigation'

export default class FormSignUp extends Component{

    state ={
        Username:'',
        validUsername:null,
        UsernameColor:'red',

        Email:'',
        validEmail:null,
        EmailColor:'red',

        Password:'',
        validPass:null,
        PassColor:'red',
    }

    validateUsername(Username){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Username)
    }

    validateEmail(Email){
        const regexs = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexs.test(Email);
    }

    validatePassword(Password){
        const regexs = /^[a-z,A-Z,0-9]+$/
        return regexs.test(Password)

        if(Password.lenght >= 6 || Password >= 16)
        {
            return true
        }else{
            return false
        }
    }



    render(){
        return(
            <Container>
                {/* <Header androidStatusBarColor="#B4424B" /> */}
                <Content>
                    <View style={styles.row}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                    </View>
                    <KeyboardAvoidingView>
                        <Form style={styles.input}>
                            <Item>
                                <Icon name="person" style={styles.icons}/>
                                <Input 
                                    placeholder="Username"
                                    onChangeText=
                                    {
                                        (text)=>this.validateUsername(text)?
                                        this.setState({validUsername:'checkmark-circle',UsernameColor:'green',Username:text}):
                                        this.setState({validUsername:'close-circle',UsernameColor:'red',Username:text})
                                    }
                                    
                                />
                                { <Icon name={this.state.validUsername} style={{color:this.state.UsernameColor}}/> }
                            </Item>
                            <Item last>
                                <Icon name="lock" style={styles.icons}/>
                                <Input 
                                    // style={this.state.emailValidate? styles.error:null}
                                    secureTextEntry={true}
                                    placeholder="Password" 
                                    onChangeText=
                                    {
                                        (text)=>this.validatePassword(text)?
                                        this.setState({validPass:'checkmark-circle',PassColor:'green',Password:text}):
                                        this.setState({validPass:'close-circle',PassColor:'red',Email:text})
                                    }
                                />
                                {<Icon name={this.state.validPass} style={{color:this.state.PassColor}}/>}
                            </Item>
                            <Item>
                                <Icon name="mail" style={styles.icons}/>
                                <Input 
                                    placeholder="E-mail" 
                                    keyboardType="email-address"
                                    onChangeText=
                                        {
                                            (text)=>this.validateEmail(text)?
                                            this.setState({validEmail:'checkmark-circle',EmailColor:'green',Email:text}):
                                            this.setState({validEmail:'close-circle',EmailColor:'red',Email:text})
                                        }
                                    />
                                    {<Icon name={this.state.validEmail} style={{color:this.state.EmailColor}}/>}
                            </Item>
                            
                            <Button full style={styles.btnSigUp} onPress={()=>alert('signup')}><Text>Sign Up</Text></Button>
                            <Button full transparent onPress={()=>this.props.navigation.navigate('SignIn')}><Text>Have an account ? Log In</Text></Button>
                        </Form>
                    </KeyboardAvoidingView>           
                </Content>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    logo:{
        height:150,
        width:300,
        resizeMode:'contain'
    },
    row:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    input:{
        marginTop:50,
        padding:20
    },
    icons:{
        color:'#595959'
    },
    btnSigUp:{
        backgroundColor:"#dd5453",
        marginTop:30  
    },
    error:{
        borderWidth:3,
        backgroundColor:'red'
    }
})