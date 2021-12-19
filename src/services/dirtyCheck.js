import _ from 'lodash';

function isDirty(obj1, obj2) {
    return !(_.isEqual(obj1, obj2));
}

export default isDirty