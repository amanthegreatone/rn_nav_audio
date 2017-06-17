/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
  Switch,
  Slider
} from 'react-native';

import {
  Player,
  Recorder,
  MediaStates
} from 'react-native-audio-toolkit';

import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/userProfile';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

let filename = 'test1.mp4';

class DashboardContainer extends Component {

  static navigationOptions = ({ navigation}) => ({
    headerTitle: 'Dashboard',
    headerLeft: <Button transparent color="white" onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
    drawerLabel: 'Dashboard',
    drawerIcon: ({tintColor}) => <Text style={{color: tintColor}}>IC</Text>,
    headerStyle: {
      borderTopWidth: 24,
    }
  });

  constructor() {
    super();

    this.state = {
      playPauseButton: 'Preparing...',
      recordButton: 'Preparing...',

      stopButtonDisabled: true,
      playButtonDisabled: true,
      recordButtonDisabled: true,

      loopButtonStatus: false,
      progress: 0,

      error: null
    };
  }

  componentWillMount() {
    this.player = null;
    this.recorder = null;
    this.lastSeek = 0;

    this._reloadPlayer();
    this._reloadRecorder();

    this._progressInterval = setInterval(() => {
      if (this.player && this._shouldUpdateProgressBar()) {// && !this._dragging) {
        this.setState({progress: Math.max(0, this.player.currentTime) / this.player.duration});
      }
    }, 100);
  }

  componentWillUnmount() {
    //console.log('unmount');
    // TODO
    clearInterval(this._progressInterval);
  }

  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState(err) {
    this.setState({
      playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
      recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

      stopButtonDisabled: !this.player || !this.player.canStop,
      playButtonDisabled: !this.player || !this.player.canPlay || this.recorder.isRecording,
      recordButtonDisabled: !this.recorder || (this.player && !this.player.isStopped),
    });
  }

  _playPause() {
    this.player.playPause((err, playing) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      this._updateState();
    });
  }

  _stop() {
    this.player.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();

    let position = percentage * this.player.duration;

    this.player.seek(position, () => {
      this._updateState();
    });
  }

  _reloadPlayer() {
    if (this.player) {
      this.player.destroy();
    }

    this.player = new Player(filename, {
      autoDestroy: false
    }).prepare((err) => {
      if (err) {
        console.log('error at _reloadPlayer():');
        console.log(err);
      } else {
        this.player.looping = this.state.loopButtonStatus;
      }

      this._updateState();
    });

    this._updateState();

    this.player.on('ended', () => {
      this._updateState();
    });
    this.player.on('pause', () => {
      this._updateState();
    });
  }

  _reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: 128000,
      channels: 2,
      sampleRate: 44100,
      // quality: 'max'
      //format: 'ac3', // autodetected
      //encoder: 'aac', // autodetected
    });
    // this.recorder.prepare((err, fsPath) => {
    //   console.log('fsPath', fsPath);
    //   if (err) {
    //     console.log('error at _reloadRecorder():');
    //     console.log(err);
    //   }
    // });

    this._updateState();
  }

  _toggleRecord() {
    if (this.player) {
      this.player.destroy();
    }

    this.recorder.toggleRecord((err, stopped) => {
      console.log('this.recorder.fsPath', this.recorder.fsPath);
      if (err) {
        this.setState({
          error: err.message
        });
      }
      if (stopped) {
        this._reloadPlayer();
        this._reloadRecorder();
      }

      this._updateState();
    });
  }

  _toggleLooping(value) {
    this.setState({
      loopButtonStatus: value
    });
    if (this.player) {
      this.player.looping = value;
    }
  }

  render() {
    // console.log(this.props);
    const userLogin = null;
    return (
      <View style={styles.container}>
        {/* <MyStatusBar backgroundColor="#303F9FD5" barStyle="light-content" translucent />
        {/* <StatusBar barStyle="light-content" translucent={true} backgroundColor='#303F9F' /> */}

        {/* <Text style={styles.welcome}>
          Dashboard
        </Text>
        <Button onPress={() => this.props.dispatch(userProfileActions.resetAccessToken())} title="Reset Login"/>
        <Button onPress={() => this.props.dispatch(userProfileActions.setUserProfile(null))} title="Reset Profile"/>
        <Button onPress={() => this.props.navigation.navigate('Tasks')} title="Tasks"/>
        <Button onPress={() => this.props.navigation.navigate('Leads')} title="Leads"/> */}

        <View>
          <Text style={styles.title}>
            Playback
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button disabled={this.state.playButtonDisabled} style={styles.button} onPress={() => this._playPause()} title={this.state.playPauseButton}/>
          <Button disabled={this.state.stopButtonDisabled} style={styles.button} onPress={() => this._stop()} title='Stop'/>
        </View>

        <View style={styles.settingsContainer}>
          <Switch
            onValueChange={(value) => this._toggleLooping(value)}
            value={this.state.loopButtonStatus} />
          <Text>Toggle Looping</Text>
        </View>

        <View style={styles.slider}>
          <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress}/>
        </View>

        <View>
          <Text style={styles.title}>
            Recording
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button disabled={this.state.recordButtonDisabled} style={styles.button} onPress={() => this._toggleRecord()} title={this.state.recordButton} />
        </View>

        <View>
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : 0,
  },
  button: {
    padding: 20,
    fontSize: 20,
    backgroundColor: 'white',
  },
  slider: {
    // height: 10,
    margin: 10,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  settingsContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  errorMessage: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'red'
  }
});

export default connect()(DashboardContainer);
