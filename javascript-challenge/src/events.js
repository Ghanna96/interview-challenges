/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/
const { parseISO, differenceInDays } = require('date-fns');

const eventsArray = [
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 5676,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-31T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
];
const groupEventsByDay = (events) => {
  //argument validation
  if (!events || events.length < 1) {
    throw new Error('Invalid argument');
  }
  for (let i in events) {
    if (typeof events[i] !== 'object') {
      throw new Error('Events must contain only objects');
    }
  }

  //sorting by date
  const sortedEvents = events.sort((a, b) => {
    return parseISO(a.startsAt) - parseISO(b.startsAt);
  });
  // console.log(sortedEvents);

  //grouping by days
  let firstDay = parseISO(sortedEvents[0].startsAt);
  return sortedEvents.reduce((acc, event) => {
    let diff = differenceInDays(parseISO(event.startsAt), firstDay);
    if (acc.hasOwnProperty(diff)) {
      acc[diff].push(event);
      return acc;
    } else {
      acc[diff] = [event];
      return acc;
    }
  }, {});
};

groupEventsByDay(eventsArray);
/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const moveEventToDay = (eventsByDay, id, toDay) => {
  return eventsByDay;
};

module.exports = {
  moveEventToDay,
  groupEventsByDay,
};
