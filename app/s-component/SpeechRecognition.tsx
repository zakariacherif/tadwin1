import React from 'react'

const SpeechRecognition = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [recordingComplete, setIsRecordingComplete] = useState<boolean>(false)
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [trascriptt, setTranscript] = useState<string>("")
    const startRecording = () => {
        setIsRecording(true)
        setTranscript("its working")
    }
    const stopRecording = () => {
        setIsRecording(!isRecording)
    }
  return (
    <div>SpeechRecognition</div>
  )
}

export default SpeechRecognition