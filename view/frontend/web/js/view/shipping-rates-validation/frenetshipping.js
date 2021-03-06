define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-rates-validation-rules',
    '../../model/shipping-rates-validator/frenetshipping',
    '../../model/shipping-rates-validation-rules/frenetshipping'
], function (
    Component,
    defaultShippingRatesValidator,
    defaultShippingRatesValidationRules,
    frenetshippingShippingRatesValidator,
    frenetshippingShippingRatesValidationRules
) {
    'use strict';

    defaultShippingRatesValidator.registerValidator('frenetshipping', frenetshippingShippingRatesValidator);
    defaultShippingRatesValidationRules.registerRules('frenetshipping', frenetshippingShippingRatesValidationRules);

    return Component;
});
