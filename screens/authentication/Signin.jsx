import { TextInput, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { WidthSpacer, HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import axios from "axios";
import { useAuthStore } from "../../store/authStore";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    // .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});

const Signin = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const [formRes, setFormRes] = useState({})
  const { setUserId } = useAuthStore()
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (value) => {
          try {
            const res = await axios.post(
              'http://cozysearch-befp-mobile-production.up.railway.app/api/auth/login',
              value
            );
            if(res.data.status){
             navigation.navigate('Bottom');
             setUserId(res.data.id)
            } else {
              setFormRes(res.data);
            }
          } catch (error) {
            setFormRes({ status: false, message: 'Sign-in failed, error :' + error });
          }
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View style={{paddingTop: 30}}>
            
            <View style={styles.wrapper}>
                <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                <MaterialCommunityIcons 
                name="email-outline"
                size={20}
                color={COLORS.gray}
                />

                <WidthSpacer width={10}/>

                <TextInput 
                placeholder='Enter email'
                onFocus={() => {setFieldTouched('email')}}
                onBlur={() => {setFieldTouched('email', "")}}
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                autoCorrect={false}
                style={{flex: 1}}
                />
                </View>
                {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>


            <View style={styles.wrapper}>
                <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                <MaterialCommunityIcons 
                name="lock-outline"
                size={20}
                color={COLORS.gray}
                />

                <WidthSpacer width={10}/>

                <TextInput 
                secureTextEntry={obsecureText}
                placeholder='Enter password'
                onFocus={() => {setFieldTouched('password')}}
                onBlur={() => {setFieldTouched('password', "")}}
                value={values.password}
                onChangeText={handleChange('password')}
                autoCapitalize="none"
                autoCorrect={false}
                style={{flex: 1}}
                />

                <TouchableOpacity onPress={()=>{
                    setObsecureText(!obsecureText)
                }}>
                    <MaterialCommunityIcons 
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                    />
                </TouchableOpacity>

                </View>
                {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

            </View>

            <HeightSpacer height={20} />

            <TouchableOpacity
              onPress={handleSubmit} // Replace 'handleSubmit' with your actual function
              style={styles.customButton}
            >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            {formRes.status == false && (
              <Text style={styles.errorMessage}>{formRes.message}</Text>
            ) }
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signin;


