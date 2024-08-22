# workers-logs
this is log capture program for cloudflare workers.


```shell
curl -X POST \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer xxxxx' \
-d '{"dt":"'"$(date -u +'%Y-%m-%d %T UTC')"'","message":"Hello from Better Stack!"}' \
-k \
https://in.logs.betterstack.com

```