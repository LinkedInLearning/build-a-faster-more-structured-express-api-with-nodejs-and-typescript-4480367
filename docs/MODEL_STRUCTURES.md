### Post Model

#### Post Model Structure

| Property                | Type                 | Description                                |
| :---------------------- | :------------------- | :----------------------------------------- |
| `_id`                   | `ObjectID or string` | Auto assigned by MongoDB                   |
| `content`               | `string`             | Content of post                            |
| `author`                | `string`             | Username of user                           |
| `reportedInappropriate` | `boolean`            | used to query when flagged for review      |
| `isInappropriate`       | `boolean`            | provides report decision made by moderator |
| `isResolved`            | `boolean`            | indicates resolution of reported post      |
| `moderatedBy`           | `ObjectID or string` | indicates who moderated post               |

#### .setModeratedBy( moderatorId )

Takes in a moderator \_id as parameter and updates it 'moderatedBy' property. To be used prior to making change in MongoDB.

#### .setReportedInappropriate()

Sets reportedInappropriate property to true.

#### .setResolved()

Sets isResolved to true.

#### .setModeratorDecision ( moderatorDecision )

Takes in a boolean and sets isAppropriate to the value passed in.

### Moderator Model

#### Moderator Model Structure

| Property               | Type                 | Description                                 |
| :--------------------- | :------------------- | :------------------------------------------ |
| `_id`                  | `ObjectID or string` | Auto assigned by MongoDB                    |
| `name`                 | `string`             | Name of moderator                           |
| `activeReport`         | `Array`              | Holds \_id of moderator's active report     |
| `moderationCount`      | `number`             | keeps tracks of moderated post count        |
| `isAvailableForReport` | `boolean`            | Allows for querying of available moderators |

#### .isAvailable()

Depending on whether or not a Moderator has an activeReport, this method will change Moderator's isAvailableForReport property to true or false.

#### .popReport()

Pops off a report from Moderator's activeReport array. To be used to update Moderator object before sending to MongoDB.

#### .pushReport( reportedPost )

Takes in a reportedPost object and pushes its \_id on to Moderator's activeReport array. To be used to update Moderator object before sending to MongoDB.
