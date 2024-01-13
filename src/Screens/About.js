import React from 'react'
import Navbar from '../Components/Navbar'

export default function About() {
  return (
    
    <div style={{backgroundColor : 'yellow' , textAlign:'center' } }>
        <Navbar />
        <h1>ABOUT THIS PREDICTION APP</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{backgroundColor : 'yellow' , textAlign:'center' } }>
        <p >
            The project aims to address the growing demand for ecological surveillance and biodiversity monitoring in underwater ecosystems. Leveraging advanced technologies, the web application employs three hybrid Classical-Quantum neural networks to identify and classify underwater animals. The chosen models are ResNet50-QCNN, ResNet18-QCNN, and InceptionV3-QCNN, each integrating classical and quantum elements for improved accuracy and efficiency.
        </p>
        </div>
        <br />
        <br />
        <br />
        <p>Application Features:</p>
        <br />
        <ul>
          <li>Developed an intuitive and user-friendly web interface for seamless interaction.</li>
          <li>Implemented functionalities for users to upload underwater animal images for real-time classification.</li>
          <li>Enabled users to visualize and interpret model predictions, including confidence scores and class probabilities.</li>
        </ul>
    </div>
    
  )
}
