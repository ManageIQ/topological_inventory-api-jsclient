JAVA=${JAVA:-/usr/bin/java}
OPENAPI_CODEGEN=~/bin/openapi-generator-cli.jar

$JAVA -jar $OPENAPI_CODEGEN generate -i conf/swagger-2-v0.1.0.yaml -g javascript -c conf/swagger.conf

cp templates/* templates/.* .
