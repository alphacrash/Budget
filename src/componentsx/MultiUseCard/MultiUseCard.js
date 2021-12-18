import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '../Components/Icon.jsx';

import './MultiUseCard.css'

const iconMapper = {
    error: 'ic_red_alert',
    warning: 'ic_yellow_alert',
    info: 'ic_blue_alert'
};

export const MultiUseCard = ({
    children,
    cardType,
    barPosition,
    cardBackground,
    coloredBackground,
    iconName,
    svgIcn,
    actionNode,
}) => (
    /* ------main-wrapper---- */
    <div className={`multi-use-card`}>
        <div className={`multi-use-card-main-wrapper-${barPosition === 'left' ? 'when-left-bar' : ''}`}>
            {/* ------bar with position left or top---- */}
            <div className={`multi-use-card-${cardType}-bar multi-use-card-${barPosition}-bar`} />
            <div
                className={`multi-use-card-wrapper multi-use-card-wrapper-${cardBackground ? 'background' : 'no-background'}`}
            >
                {/*---- wrapper for the content inside the card----- */}
                <div
                    className={`multi-use-card-content-wrapper ${barPosition === 'top' ? 'multi-use-card-content-wrapper-when-top-bar' : ''
                        } ${coloredBackground ? 'multi-use-card-content-colored-background' : ''}`}
                >
                    {iconName && (
                        <div className='multi-use-card-icon-wrapper'>
                            <span className={`icon ${iconName} hidden-xs hidden-sm`} />
                            <span className={`icon ${iconMapper[cardType]} hidden-md hidden-lg`} />
                        </div>
                    )}
                    {svgIcn && (
                        <div className='multi-use-card-icon-wrapper'>
                            {/* <Icon name={svgIcn} className="hidden-xs hidden-sm" /> */}
                            <span className={`icon ${iconMapper[cardType]} hidden-md hidden-lg`} />
                        </div>
                    )}

                    <div className='multi-use-card-children-with-action-wrapper'>
                        <div className='multi-use-card-children-wrapper'>{children}</div>
                        {actionNode && <div className='multi-use-card-action-wrapper'>{actionNode}</div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

MultiUseCard.propTypes = {
    /**
     * Select a particular type of card, that will have a bar either on the top or on the left, based on the props(barPosition) value.
     */
    cardType: PropTypes.oneOf(['primary', 'dark', 'light', 'cyan', 'success', 'warning', 'error', 'gradient']),
    /**
     * Where do you want your bar location? This value is only applicable if one of the cardType is selected.
     */
    barPosition: PropTypes.oneOf(['top', 'left']),
    /**
     * Toggle between background and no background for the card.
     */
    cardBackground: PropTypes.bool,
    /**
     * Pass any React Node or HTML element as children
     */
    children: PropTypes.node.isRequired,
    /**
     * The required icon will be fetched from Icon.scss file using given name as props.
     */
    iconName: PropTypes.string,
    /**
     * Pass any button for actions, with its triggering method
     */
    actionNode: PropTypes.node,
    /**
     * Gives a light blue color to the card
     */
    coloredBackground: PropTypes.bool,
};

MultiUseCard.defaultProps = {
    barPosition: 'left',
    cardBackground: true,
    coloredBackground: false,
};
