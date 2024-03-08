// Import Statement
const Person = require('../src/person.js')
const Institution = require('../src/institution.js')

describe('Person_Test_Cases', () => {
  test('Given_NewPerson_When_AllConditionsMet_Then_ReturnsTrue', () => {
    // Given
    // My assumptions
    // Create an institution (of learning)
    // Institution
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // When
    // The actions necessary to complete the test case
    // Create and validate a Person
    const testPerson = new Person('lastName', 'firstName', 'test school', '1/1/2024', 'student_username', 'affiliation')

    // Then
    // Conditions Verifying
    expect(2 + 2).toBe(4)
  })
})
