import React from 'react';

import Aboutme from './Aboutme';
import Data from './Data';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import RRSS from './RRSS';
import QR from './QR';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';
import expandbuttonmedium from '../images/expandbuttonmedium.png';

class Form extends React.Component {
	render() {
		return (
					<section className={`form-section box-${this.props.visible ? 'visible' : 'invisible'}`} id="ventana1">
						<Data />
						<Aboutme />
						<Experience />
						<Education />
						<Skills />
						<Languages />
						<Hobbies />
						<RRSS />
						<QR />

					</section>

		)
	}
}

export default Form ;
