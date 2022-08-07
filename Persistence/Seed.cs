using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Events.Any()) return;

            var events = new List<Event>
            {
                new Event
                {
                    Title = "Past Event 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Event 2 months ago",
                    City = "London",
                    Location = "Pub"
                },
                new Event
                {
                    Title = "Past Event 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Event 1 month ago",
                    City = "Paris",
                    Location = "The Louvre"
                },
                new Event
                {
                    Title = "Future Event 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Event 1 month in future",
                    City = "London",
                    Location = "Wembley Stadium"
                },
                new Event
                {
                    Title = "Future Event 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Event 2 months in future",
                    City = "London",
                    Location = "Jamies Italian"
                },
                new Event
                {
                    Title = "Future Event 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Event 3 months in future",
                    City = "London",
                    Location = "Jamies Italian"
                },
                new Event
                {
                    Title = "Future Event 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Event 4 months in future",
                    City = "London",
                    Location = "British Museum"
                },
                new Event
                {
                    Title = "Future Event 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Event 5 months in future",
                    City = "London",
                    Location = "Punch and Judy"
                },
                new Event
                {
                    Title = "Future Event 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Event 6 months in future",
                    City = "London",
                    Location = "O2 Arena"
                },
                new Event
                {
                    Title = "Future Event 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Event 7 months in future",
                    City = "Berlin",
                    Location = "Pub"
                },
                new Event
                {
                    Title = "Future Event 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Event 8 months in future",
                    City = "London",
                    Location = "Pub"
                },
            };

            await context.Events.AddRangeAsync(events);
            await context.SaveChangesAsync();
        }
    }
}