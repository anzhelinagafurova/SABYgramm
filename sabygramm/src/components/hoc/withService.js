import React from 'react';
import { ServiceConsumer } from '../context';

const withService = () => (Wrapped) => {
    return (props) => {
        return(
            <ServiceConsumer>
            {
                (sabygramService) => {
                    return <Wrapped {...props} sabygramService={sabygramService}/>
                }
            }
            </ServiceConsumer>
        )       
    }
}

export default withService;