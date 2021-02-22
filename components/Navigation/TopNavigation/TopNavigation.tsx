import React from 'react';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import Button from '../../../helpers/Hoc/Buttons/Button';
//******************************** */
const TopNavigation = (props: any) => {
    return (
        <nav className="top__navigation">
            <Wrapper class="top__navigation--content">
                <Button class="top__navigation--button" clicked={() => props.showSideNavigation()}>
                    <Wrapper class="top__navigation--toggle">
                        <Wrapper></Wrapper>
                    </Wrapper>
                </Button>
                I am a top navigation
            </Wrapper>
        </nav>
    );
};

export default TopNavigation;
