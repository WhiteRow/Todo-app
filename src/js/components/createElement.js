import _ from 'lodash/core';

export default function CreateElement(tag, attrs, ...childs) {
    const element = document.createElement(tag);

    const _setAttributes = (element) => {
        _.each(attrs, (item, index) => {
            element.setAttribute(index, item);
        })
    };

    const _setChilds = (element) => {
        
        const _childRender = (child) => {
            if(typeof(child) === 'string') element.insertAdjacentText('beforeend', child);
            else element.insertAdjacentElement('beforeend', child);
        }
        
        _.map(childs, child => _childRender(child))
    }

    const _setElementArgs = (element)  => {
        _setChilds(element);
         _setAttributes(element);
    }

    _setElementArgs(element)
        
    return element;
}