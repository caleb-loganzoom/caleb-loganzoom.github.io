import uitoolkit from './@zoom/videosdk-ui-toolkit/index.js'

var sessionContainer = document.getElementById('sessionContainer')
var authEndpoint = ''
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiM0VaWW5STDRtMnNnaUVvY1N2VHY1SHdwbjBQUXo1SzNWQjVLIiwicm9sZV90eXBlIjoxLCJ0cGMiOiJ0ZXN0IiwiaWF0IjoxNzM4MDg5NTA2LCJleHAiOjE3MzgwOTMxMDZ9.flKv5siDkL8bR2nNLQI1Cpmazfvvr8uuGZBYAnaZjuo',
    sessionName: 'test',
    userName: 'JavaScript',
    sessionPasscode: '123',
    features: ['video', 'audio', 'settings', 'users', 'chat', 'share'],
    options: { init: {enforceVirtualBackground: true}, audio: {}, video: {virtualBackground: { cropped: true, imageUrl:'https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop'}}, share: {}},
    virtualBackground: {
       allowVirtualBackground: true,
       allowVirtualBackgroundUpload: true,
       virtualBackgrounds: ['https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop']
    }
};
var role = 1

window.getVideoSDKJWT = getVideoSDKJWT

function getVideoSDKJWT() {
    joinSession()
}

function joinSession() {
    uitoolkit.joinSession(sessionContainer, config)

    uitoolkit.onSessionClosed(sessionClosed)
}

var sessionClosed = (() => {
    console.log('session closed')
    uitoolkit.closeSession(sessionContainer)

    document.getElementById('join-flow').style.display = 'block'
})
