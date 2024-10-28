import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {COLORS} from '../../constants/Colors';
import {LOGOUT, USER} from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../hooks/reduxHook';
import {resetStore} from '../../store/slice/resetSlice';
import Toast from 'react-native-toast-message';
import {DRAWER_FIELDS} from '../../constants/NavigationRoutes';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const logoutHandler = async () => {
    try {
      dispatch(resetStore());
      await AsyncStorage.removeItem('authToken');
      props.navigation.closeDrawer();

      Toast.show({
        type: 'success',
        text1: 'Logout Successful',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onPressHandler = (route: string) => {
    props.navigation.closeDrawer();
    props.navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={USER} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>johndoe@example.com</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.drawerItemSection}>
          {DRAWER_FIELDS?.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => onPressHandler(item?.route)}>
                <View style={styles.drawerIconContainer}>
                  <Image source={item?.image} style={styles.drawerIcon} />
                </View>
                <Text style={styles.drawerText}>{item?.text}</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setModalVisible(true)}>
        <View style={styles.drawerIconContainer}>
          <Image source={LOGOUT} style={styles.drawerIcon} />
        </View>
        <Text style={styles.drawerText}>Log Out</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want {'\n'} to log out?
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}>
                <Text
                  style={[styles.modalButtonText, {color: COLORS.orangeBase}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  logoutHandler();
                }}>
                <Text style={styles.modalButtonText}>Yes, logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orangeBase,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 32,
    lineHeight: 30,
    color: COLORS.secondary,
  },
  profileEmail: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 16,
    lineHeight: 14,
    color: COLORS.secondary,
  },
  scrollContainer: {
    flex: 1,
    marginVertical: 20,
  },
  drawerItemSection: {
    marginTop: 10,
    paddingHorizontal: 30,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  drawerIconContainer: {
    backgroundColor: COLORS.lightWhite,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 15,
  },
  drawerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: COLORS.orangeBase,
  },
  drawerText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 24,
    lineHeight: 22,
    color: COLORS.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightOrange,
    marginVertical: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: 20,
    left: 0,
    right: 0,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.lightBlack,
  },
  modalContent: {
    backgroundColor: COLORS.lightWhite,
    padding: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontFamily: 'LeagueSpartan-Medium',
    lineHeight: 18,
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.dark,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.orangeBase,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: COLORS.orangeLight,
  },
  modalButtonText: {
    color: COLORS.lightWhite,
    fontSize: 16,
    fontFamily: 'LeagueSpartan-Medium',
  },
});
