import React from 'react'
import HeaderBar from './HeaderBar'

const AppLayout = (WrappedComponents) => {
	return (props) => {
		return(
			<>
				<div>
					<HeaderBar />
					<WrappedComponents {...props} />
				</div>
			</>
		)
	}
}

export default AppLayout;