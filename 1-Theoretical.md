## Theoretical Exercise
Below are the Test Cases and questions / comments for the explained User Story.
Please note that some tests are not detailed due to the pending answers from the PO (see Questions section).

## Questions
1. I can leave the field blank but validations will be done on submit. Is the field mandatory then?
1. What is the length (min and max) of the landline phone number?
1. What is the expected format? (parentheses, dashes, spaces...)
1. Should the prefix be in the same field of the landline number, or should it be a separate field?
1. Is the prefix a selection field or a free text? If free text, should it be written with "+" or with leading zeroes?
1. Aside of the prefix mandatoriness, the question about the field mandatoriness, and the rule of being different than the mobile phone, are there any other validations to be considered?
1. Should any other role be able to edit it, or only the Bank Teller?
1. Should there be a confirmation message once it is successfully saved?

## Test Cases

### Unit Tests
1. Submitting with a valid landline phone shall not populate the `Errors` list.
1. Submitting with the landline phone being the same as the mobile phone, an error shall be added to the `Errors`list.
1. Submitting without the landline phone prefix shall add an error to the `Errors` list.

### Integration Tests
1. Submitting a valid landline phone when the field was empty shall populate the `landline_phone` field in the database.
1. Submitting a valid landline phone when the field already had a value shall update the `landline_phone`field in the database with the new value.
1. Submitting having removed the landline phone shall update the `landline_phone` field in the database and leave it empty.
1.  I would do the same validation scenarios done in the Unit Tests to ensure that the API returns the corresponding errors. 

### UI Tests
For UI testing I am assuming some design decisions. I would also run a regression with the existing tests to ensure no previous field was removed by error.

1. There shall be a new editable field for the landline phone visible in the UI.
1. I can only input numeric values (or special characters for the specified format) in the landline phone field.
1. I cannot type more digits than the maximum allowed (pending answer from PO).
1. I cannot type less digits than the minimum expected.
1. When submitting with a landline phone without prefix, the validation banner with the error message shall appear and the field shall be highlighted in red.
1. When submitting with a landline phone having the same number as the mobile phone, the validation banner with the error message shall appear and the field shall be highlited in red.
1. When submitting a valid form, the validation banner shall not be visible and no field should be highlighted in red.
1. I can empty the landline phone and submit without errors.
1. Given that I submit an edited landline phone, when I navigate out of the page and come back, then the last submitted value shall be shown.
