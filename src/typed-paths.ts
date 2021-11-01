import { get as _get } from 'lodash';

function get<ObjecType extends object, Path extends string, OrElse extends unknown>(obj:ObjecType, path: Path, orElse?: OrElse): ResolveType<ObjecType, Path, OrElse> {
  return _get(obj, path, orElse);
}

get({
  name: "foo",
  path: "/foo",
  params: {
    bla: 'aaa',
  },
  children: [
    {
      name: "bar",
      path: "/bar",
    },
    {
      name: "goo",
      path: "/goo",
    },
  ],
},'deeplvl1[1].deeplvl2.deeplvl3[88].deeplvl4.value');

/**
 * It tries to resolve the path of the given object, otherwise it will return OrElse
 */
 export type ResolveType<ObjectType, Path extends string, OrElse> =
 Path extends keyof ObjectType ? ObjectType[Path] :
 Path extends `${infer LeftSide}.${infer RightSide}` ? LeftSide extends keyof ObjectType ? ResolveType<ObjectType[LeftSide], RightSide, OrElse> : 
 Path extends `${infer LeftSide}[${number}].${infer RightSide}` ? LeftSide extends keyof ObjectType ? ObjectType[LeftSide] extends Array<infer U>? ResolveType<U,RightSide, OrElse> : OrElse : OrElse : OrElse :
 Path extends `${infer LeftSide}[${number}]` ? LeftSide extends keyof ObjectType ? ObjectType[LeftSide] extends Array<infer U> ? U : OrElse : OrElse : OrElse;

