# !bin/sh

buf generate
buf export . --output ../product-api/src/proto
buf export . --output ../payment/src/protos
buf export ./auth --output ../auth-api/src/protos