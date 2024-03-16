import React from 'react';
import OtherOptionsPicker from './OtherOptionsPicker';


const OtherOptions: React.FC = () => {
    return (
        <div>
            <OtherOptionsPicker header={'When?'} buttonLeft={'Instant'} buttonRight={'Shedule'} isLeftCommingSoon={false} isRightCommingSoon={true} setOtherOptions={function (): void {
               console.log('Function not implemented.');
            } } />
            <OtherOptionsPicker header={'Share'} buttonLeft={'Private'} buttonRight={'Public'} isLeftCommingSoon={false} isRightCommingSoon={true} setOtherOptions={function (): void {
                console.log('Function not implemented.');
            } } />
        </div>
    );
};

export default OtherOptions;
