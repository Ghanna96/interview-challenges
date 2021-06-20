const { getObjectById, moveEventToDay, groupEventsByDay } = require('./events');

const eventsArray = [
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 5676,
    startsAt: '2021-01-30T13:01:11Z',
    endsAt: '2021-01-30T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
];

const groupedEvents = {
  0: [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  3: [
    {
      id: 5676,
      startsAt: '2021-01-30T13:01:11Z',
      endsAt: '2021-01-30T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

const invalidArray = [
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  'hello',
];
describe('groupEventsByDay', () => {
  it('throw error on invalid arguments', () => {
    expect(() => groupEventsByDay()).toThrow('Invalid argument');
    expect(() => groupEventsByDay([])).toThrow('Invalid argument');
    expect(() => groupEventsByDay(invalidArray)).toThrow(
      'Events must contain only objects',
    );
  });
  it('group by days', () => {
    expect(() => groupEventsByDay(eventsArray)).toBeDefined();
    expect(groupEventsByDay(eventsArray)).toEqual(groupedEvents);
  });
});

const returnedObj = {
  eventToMod: {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  currentDay: 0,
  index: 1,
};

const movedEvent = {
  0: [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  4: [
    {
      id: 5676,
      startsAt: '2021-01-31T13:01:11Z',
      endsAt: '2021-01-31T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};
const movedEvent2 = {
  0: [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  2: [
    {
      id: 5676,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-29T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

describe('moveEventToDay', () => {
  it('getObjectById', () => {
    expect(getObjectById(groupedEvents, 156)).toStrictEqual(returnedObj);
  });
  it('throw error', () => {
    expect(() => {
      moveEventToDay(groupedEvents, 156, '4');
    }).toThrow('id and toDay must be numbers');
  });
  it('cannot find id', () => {
    expect(() => {
      moveEventToDay(groupedEvents, 157, 4);
    }).toThrow('cannot find id');
  });
  it('moveEvent and add days', () => {
    expect(moveEventToDay(groupedEvents, 5676, 4)).toStrictEqual(movedEvent);
  });

  it('moveEvent and subtract days', () => {
    expect(moveEventToDay(groupedEvents, 5676, 2)).toStrictEqual(movedEvent2);
  });
});
