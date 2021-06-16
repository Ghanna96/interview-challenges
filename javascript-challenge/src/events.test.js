const { moveEventToDay, groupEventsByDay } = require('./events');

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

const mockResult = {
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
  {
    id: 5676,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
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
    expect(groupEventsByDay(eventsArray)).toStrictEqual(mockResult);
  });
});

test('moveEvent', () => {});
