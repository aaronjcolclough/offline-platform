namespace <%= classify(name) %>.Identity.Mock;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

public class MockMiddleware
{
    private readonly RequestDelegate next;

    public MockMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context, IUserProvider provider, IConfiguration config)
    {
        if (!(provider.Initialized))
        {
            await provider.Create(config.GetValue<string>("CurrentUser"));

            if (!(context.User.Identity.IsAuthenticated))
            {
                await provider.AddIdentity(context);
            }
        }

        await next(context);
    }
}