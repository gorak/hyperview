// @flow

/**
 * Copyright (c) Garuda Labs, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Dimensions } from 'react-native';
import React from 'react';

// Currently partially implemented, should be brought to parity
// with mobile in https://github.com/Instawork/hyperview/issues/455
export default (props: any) => {
  const windowDimensions = Dimensions.get('window');
  const windowHeight = windowDimensions.height;
  const windowWidth = windowDimensions.width;
  if (props.source.uri) {
    return (
      <iframe
        height={windowHeight}
        src={props.source.uri}
        title="-"
        width={windowWidth}
      />
    );
  }
  if (props.source.html) {
    return props.source.html;
  }
  return '';
};
