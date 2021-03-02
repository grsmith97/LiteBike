# LiteBike

## Testing
To run all tests: `npm test`

### Snapshot Testing
When testing components, snapshots are taken of the Document Object Model during runtime. These snapshots are stored at the same level in the project hierarchy as their respective test. These snapshots should never be modified manually. They are checked against during each subsequent run of the test to ensure outside factors are not affecting the DOM. You can invoke a snapshot test by using Jest's `.toMatchSnapshot()` or `.toMatchInlineSnapshot(<inline-snapshot>)`.
